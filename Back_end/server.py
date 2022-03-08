import flask
import pickle
from flask import Flask, request,make_response

#import ML.download_model

from flask_cors import CORS, cross_origin

#import ssl
#context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
#context.use_privatekey_file('key.pem')
#context.use_certificate_file('cert.pem')

#import ssl
#context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
#context.load_cert_chain('cert.pem', 'key.pem')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['POST','GET'])
@cross_origin()
def hello_world():  # put application's code here
    L=[]
    if(request.method=='POST'):
        s = request.get_json()
        temp=[]
        for key in s:
            temp.append(s[key])
        L.append(temp)
        print(L)
    
        file_name = "sample.txt"
        url_str=''
        if(len(temp[2])>=30):
            url_str+=temp[2][:30]
        else:
            url_str+=temp


        open_file = open(file_name, "a")
        open_file.write(temp[0]+','+temp[1]+ ","+url_str+"\n")
        #pickle.dump(temp,open_file)
        open_file.close()
    

        

    return s

    

def test():
    c='returned from TEST'
    return c






if __name__ == '__main__':
    #app.run(ssl_context='adhoc')
    #app.run(ssl_context=("cert.pem", "key.pem"))
    app.run()
