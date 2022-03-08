# Smartcue_task

So far, I have been able to track users mouse click events using a chrome extension. I am tracking them by id or class name tag whichever is applicable. And then a json response  is sent to a flask app where these details are recorded in a text file. I then read the text file and use Selenium to highlight the parts where the user has clicked in the past. One obvious improvement is to use a database rather than  a text file. And also I have the server running in my local setup, it should be moved to the cloud.
Regarding comments about working of the application:
Right now when the user clicks on a element in webpage the javascript event for the click is generated many times for  just one click. I will have to filter out and remove the duplicates( this can be done by caching the last entry and comparing it with current element that has been clicked. If both are same then we discard the current elemrent. Else we add it to our database).
If webpage is very lengthy and if more than 1 element in clicked in the same page is being pressed, then the user has to move such that the rest of the pages come in focus. Auto scrolling can be enabled for this purpose.
