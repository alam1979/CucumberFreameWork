$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SimpleScenario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: freeautomationlearning@gmail.com"
    }
  ],
  "line": 2,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 54647269,
  "error_message": "java.lang.IllegalStateException: The driver is not executable: /Users/mohammedalam/git/CucumberFramework/drivers/chromedriver.exe\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:530)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:127)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:118)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:302)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat utility.Hook.setUp(Hook.java:33)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate google search text field",
  "description": "",
  "id": "google-search;validate-google-search-text-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to google page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I validate the search text field",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_open_a_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleSearch.i_navigate_to_google_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GoogleSearch.i_validate_the_search_text_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 88749,
  "error_message": "java.lang.NullPointerException\n\tat utility.Hook.tearDown(Hook.java:52)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:104)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:645)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:851)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1177)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:756)\n\tat org.testng.TestRunner.run(TestRunner.java:610)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:387)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:382)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1293)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1218)\n\tat org.testng.TestNG.runSuites(TestNG.java:1133)\n\tat org.testng.TestNG.run(TestNG.java:1104)\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\n",
  "status": "failed"
});
});