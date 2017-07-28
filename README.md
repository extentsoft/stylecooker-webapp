# stylecooker-webapp
StyleCooker Web Application

# Naming Convention
* develop
* master

* feat_
* release_
* hotfix_


# Initiation Log
1. install express-generator
2. create repository via github.com
3. git clone xxxx.git
4. generate express web structure with express-generator
5. fork new repository as Developer not admin or founder

git config --global user.email "thanakorn@extentsoft.com"
git config --global user.name "Thanakorn Piroonsith"

6. add bootstrap 3/4 references
7. install testing libraries

** BDD ** npm install mocha chai wd chai-as-promised --save-dev
** TDD ** npm install sinon sinon-chai --save-dev


npm install selenum-webdriver --save-dev
npm install chromedriver --save-dev
npm install coffee-script --save-dev

8. add test folder

# Express generator log

   create : ../../../../stylecooker-webapp
   create : ../../../../stylecooker-webapp/package.json
   create : ../../../../stylecooker-webapp/app.js
   create : ../../../../stylecooker-webapp/routes
   create : ../../../../stylecooker-webapp/routes/index.js
   create : ../../../../stylecooker-webapp/routes/users.js
   create : ../../../../stylecooker-webapp/public
   create : ../../../../stylecooker-webapp/views
   create : ../../../../stylecooker-webapp/views/index.ejs
   create : ../../../../stylecooker-webapp/views/error.ejs
   create : ../../../../stylecooker-webapp/bin
   create : ../../../../stylecooker-webapp/bin/www
   create : ../../../../stylecooker-webapp/public/javascripts
   create : ../../../../stylecooker-webapp/public/images
   create : ../../../../stylecooker-webapp/public/stylesheets
   create : ../../../../stylecooker-webapp/public/stylesheets/style.css

   install dependencies:
     > cd ../../../../stylecooker-webapp && npm install

   run the app:
     > SET DEBUG=stylecooker-webapp:* & npm start

# Test Suites
BDD
1. wd = selenoium-webdriver + chromedriver
2. ..
3. mocha
4. chai-as-promised
5. chai
TDD
6. sinon
7. sinon-chai

# Selenium Log --> wd, chromedriver

  mocha spec examples
    using promises and chai-as-promised
 > CALL init({"browserName":"chrome"})
 > POST /session {"desiredCapabilities":{"browserName":"chrome","version":"","javascriptEnabled":true,"platform":"ANY"}}

Driving the web on session: 02525730-0a5e-452b-9c6c-494b10c38a27

 > RESPONSE init({"browserName":"chrome"}) "02525730-0a5e-452b-9c6c-494b10c38a27",{"applicationCacheEnabled":false,"rotatable":false,"mobileEmulationEnabled":false,"networkConnectionEnabled":false,"chrome":{"chromedriverVersion":"2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41)","userDataDir":"C:\\Users\\cheerzmc\\AppData\\Local\\Temp\\scoped_dir1704_16207"},"takesHeapSnapshot":true,"pageLoadStrategy":"normal","databaseEnabled":false,"handlesAlerts":true,"hasTouchScreen":false,"version":"59.0.3071.115","platform":"XP","browserConnectionEnabled":false,"nativeEvents":true,"acceptSslCerts":true,"webdriver.remote.sessionid":"02525730-0a5e-452b-9c6c-494b10c38a27","locationContextEnabled":true,"webStorageEnabled":true,"browserName":"chrome","takesScreenshot":true,"javascriptEnabled":true,"cssSelectorsEnabled":true,"unexpectedAlertBehaviour":""}
 > CALL get("http://localhost:3000/")
 > POST /session/:sessionID/url {"url":"http://localhost:3000/"}
 > RESPONSE get("http://localhost:3000/")
 > CALL title()
 > GET /session/:sessionID/title
 > RESPONSE title() "Express"
      1) should retrieve the page title
 > CALL get("http://localhost:3000/")
 > POST /session/:sessionID/url {"url":"http://localhost:3000/"}
 > RESPONSE get("http://localhost:3000/")
 > CALL elementById("submit")
 > POST /session/:sessionID/element {"using":"id","value":"submit"}
      2) submit element should be clicked
 > CALL quit()
 > DELETE /session/:sessionID

Ending your web drivage..

 > RESPONSE quit()
    regular mocha usage
 > CALL init({"browserName":"chrome"})

Driving the web on session: 081f4542-062b-4e35-a36d-1a71a633be7b

 > RESPONSE init({"browserName":"chrome"}) "081f4542-062b-4e35-a36d-1a71a633be7b",{"applicationCacheEnabled":false,"rotatable":false,"mobileEmulationEnabled":false,"networkConnectionEnabled":false,"chrome":{"chromedriverVersion":"2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41)","userDataDir":"C:\\Users\\cheerzmc\\AppData\\Local\\Temp\\scoped_dir2928_17908"},"takesHeapSnapshot":true,"pageLoadStrategy":"normal","databaseEnabled":false,"handlesAlerts":true,"hasTouchScreen":false,"version":"59.0.3071.115","platform":"XP","browserConnectionEnabled":false,"nativeEvents":true,"acceptSslCerts":true,"webdriver.remote.sessionid":"081f4542-062b-4e35-a36d-1a71a633be7b","locationContextEnabled":true,"webStorageEnabled":true,"browserName":"chrome","takesScreenshot":true,"javascriptEnabled":true,"cssSelectorsEnabled":true,"unexpectedAlertBehaviour":""}
 > CALL get("http://localhost:3000/")
 > RESPONSE get("http://localhost:3000/")
 > CALL title()
 > RESPONSE title() "Express"
      3) should retrieve the page title
 > CALL get("http://localhost:3000/")
 > RESPONSE get("http://localhost:3000/")
 > CALL elementById("submit")
      4) submit element should be clicked
 > CALL quit()

Ending your web drivage..

 > RESPONSE quit()


  0 passing (11s)
  4 failing

  1) mocha spec examples using promises and chai-as-promised should retrieve the page title:

      AssertionError: expected 'Express' to deeply equal 'WD Tests'
      + expected - actual

      -Express
      +WD Tests

      at Proxy.promise.(anonymous function) (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\promise-webdriver.js:127:32)
      at Proxy.assertEqual (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\chai\lib\chai\core\assertions.js:1012:19)
      at Proxy.methodWrapper (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\chai\lib\chai\utils\addMethod.js:57:25)
      at getBasePromise.then.then.newArgs (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\chai-as-promised\lib\chai-as-promised.js:302:22)
      at _fulfilled (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:834:54)
      at self.promiseDispatch.done (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:863:30)
      at Promise.promise.promiseDispatch (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:796:13)
      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:604:44
      at runSingle (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:137:13)
      at flush (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:125:13)
      at _combinedTickCallback (internal/process/next_tick.js:73:7)
      at process._tickCallback (internal/process/next_tick.js:104:9)

  2) mocha spec examples using promises and chai-as-promised submit element should be clicked:
     Error: [elementById("submit")] Error response status: 7, , NoSuchElement - An element could not be located on the page using the given search parameters. Selenium error: no such element: Unable to locate element: {"method":"id","selector":"submit"}
  (Session info: chrome=59.0.3071.115)
  (Driver info: chromedriver=2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform=Windows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)
Command duration or timeout: 21 milliseconds
For documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html
Build info: version: '2.53.1', revision: 'a36b8b1', time: '2016-06-30 17:37:03'
System info: host: 'LAPTOP-QCD72LVO', ip: '192.168.56.1', os.name: 'Windows 10', os.arch: 'amd64', os.version: '10.0', java.version: '1.8.0_144'
Driver info: org.openqa.selenium.chrome.ChromeDriver
Capabilities [{applicationCacheEnabled=false, rotatable=false, mobileEmulationEnabled=false, networkConnectionEnabled=false, chrome={chromedriverVersion=2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir=C:\Users\cheerzmc\AppData\Local\Temp\scoped_dir1704_16207}, takesHeapSnapshot=true, pageLoadStrategy=normal, databaseEnabled=false, handlesAlerts=true, hasTouchScreen=false, version=59.0.3071.115, platform=XP, browserConnectionEnabled=false, nativeEvents=true, acceptSslCerts=true, locationContextEnabled=true, webStorageEnabled=true, browserName=chrome, takesScreenshot=true, javascriptEnabled=true, cssSelectorsEnabled=true, unexpectedAlertBehaviour=}]
Session ID: 32414886d5e2170227f31c59b3f2e875
*** Element info: {Using=id, value=submit}
      at exports.newError (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\utils.js:145:13)
      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\callbacks.js:75:19
      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\webdriver.js:179:5
      at Request._callback (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\http-utils.js:88:7)
      at Request.self.callback (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\request\request.js:186:22)
      at Request.<anonymous> (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\request\request.js:1081:10)
      at IncomingMessage.<anonymous> (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\request\request.js:1001:12)
      at endReadableNT (_stream_readable.js:974:12)
      at _combinedTickCallback (internal/process/next_tick.js:80:11)
      at process._tickCallback (internal/process/next_tick.js:104:9)

  3) mocha spec examples regular mocha usage should retrieve the page title:

      AssertionError: expected 'Express' to equal 'WD Tests'
      + expected - actual

      -Express
      +WD Tests

      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\tests\index.js:93:24
      at _fulfilled (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:834:54)
      at self.promiseDispatch.done (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:863:30)
      at Promise.promise.promiseDispatch (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:796:13)
      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:604:44
      at runSingle (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:137:13)
      at flush (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\q\q.js:125:13)
      at _combinedTickCallback (internal/process/next_tick.js:73:7)
      at process._tickCallback (internal/process/next_tick.js:104:9)

  4) mocha spec examples regular mocha usage submit element should be clicked:
     Error: [elementById("submit")] Error response status: 7, , NoSuchElement - An element could not be located on the page using the given search parameters. Selenium error: no such element: Unable to locate element: {"method":"id","selector":"submit"}
  (Session info: chrome=59.0.3071.115)
  (Driver info: chromedriver=2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41),platform=Windows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)
Command duration or timeout: 18 milliseconds
For documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html
Build info: version: '2.53.1', revision: 'a36b8b1', time: '2016-06-30 17:37:03'
System info: host: 'LAPTOP-QCD72LVO', ip: '192.168.56.1', os.name: 'Windows 10', os.arch: 'amd64', os.version: '10.0', java.version: '1.8.0_144'
Driver info: org.openqa.selenium.chrome.ChromeDriver
Capabilities [{applicationCacheEnabled=false, rotatable=false, mobileEmulationEnabled=false, networkConnectionEnabled=false, chrome={chromedriverVersion=2.30.477700 (0057494ad8732195794a7b32078424f92a5fce41), userDataDir=C:\Users\cheerzmc\AppData\Local\Temp\scoped_dir2928_17908}, takesHeapSnapshot=true, pageLoadStrategy=normal, databaseEnabled=false, handlesAlerts=true, hasTouchScreen=false, version=59.0.3071.115, platform=XP, browserConnectionEnabled=false, nativeEvents=true, acceptSslCerts=true, locationContextEnabled=true, webStorageEnabled=true, browserName=chrome, takesScreenshot=true, javascriptEnabled=true, cssSelectorsEnabled=true, unexpectedAlertBehaviour=}]
Session ID: e26ba97c9680bfcfab2b3a7046ca1a81
*** Element info: {Using=id, value=submit}
      at exports.newError (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\utils.js:145:13)
      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\callbacks.js:75:19
      at C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\webdriver.js:179:5
      at Request._callback (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\wd\lib\http-utils.js:88:7)
      at Request.self.callback (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\request\request.js:186:22)
      at Request.<anonymous> (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\request\request.js:1081:10)
      at IncomingMessage.<anonymous> (C:\Users\cheerzmc\Documents\Development\Thanakorn\stylecooker-webapp\node_modules\request\request.js:1001:12)
      at endReadableNT (_stream_readable.js:974:12)
      at _combinedTickCallback (internal/process/next_tick.js:80:11)
      at process._tickCallback (internal/process/next_tick.js:104:9)
