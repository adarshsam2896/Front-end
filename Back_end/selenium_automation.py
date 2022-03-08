from selenium import webdriver
import time
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import WebDriverException

chrome_options = Options() 
#chrome_options.add_experimental_option("detach", True)
#driver = webdriver.Chrome(options=chrome_options)
driver = webdriver.Chrome(executable_path=r"/Users/adarshsam/Downloads/chromedriver_2",options=chrome_options)
lines = []
with open('sample.txt') as f:
    lines = f.readlines()
f.close()
driver.get('https://www.google.com/search?q=manchester+united&oq=man&aqs=chrome.0.69i59j46i131i433i512j69i57j46i199i291i433i512j69i60l2j69i61j69i60.1713j0j7&sourceid=chrome&ie=UTF-8')
i=0
#driver.execute_script("""
#var script = document.createElement( 'script' );
#script.type = 'text/javascript';
#script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
#document.head.appendChild(script);
#$("div.a[customattrib='2']")
#""")
#javaScript="document.querySelector('[class="GmE3X"][aria-level="2"]') "



#time.sleep(10000)
#javaScript = "document.getElementById('result-stats').style.border='2px solid red' "
#driver.execute_script( javaScript)
#nm='result-stats'
#driver.execute_script("""var nm=arguments[0]; document.getElementById(nm).style.border='2px solid red' """,nm)
print("OVER!!")
while(True):
    try:
        temp=lines[i].split(',')
        nm=temp[0]
        print(nm)
        ind=int(temp[1])
        print(ind)
        url=temp[2]
        if(ind==-1):
            #javaScript = "document.getElementById(@placeholder).style.border='2px solid red' "
            print("HERE!!!")
            driver.execute_script("""var nm=arguments[0]; document.getElementById(nm).style.border='2px solid red' """,nm)
        else:
            print("CHECK....")
            #javaScript = "document.getElementsByClassName(nm)[ind].style.border='2px solid red' "
            driver.execute_script("""var nm=arguments[0]; var ind=arguments[1]; document.getElementsByClassName(nm)[ind].style.border='2px solid red' """,nm,ind)
        #print("WELL THIS MAY NOT WORK")
        i=i+1

        
        #curr_url=driver.current_url
        #if(len(curr_url)>=30):
            #curr_url=driver.current_url[:30]
    
        #if(curr_url!=url):
            #i+=1


    except:
        print("NOT YET PRESSED THE BUTTON SO DECREMENT!!!")
        i=i-1
    
    time.sleep(2)

    

# Wait for 5 seconds to load the webpage completely#
#time.sleep(15)  
# Find the button using text
#driver.find_element_by_xpath('//button[normalize-space()="Click me!"]').click()
  

print("HEREEE")
# Close the driver

#time.sleep(100)
driver.close()