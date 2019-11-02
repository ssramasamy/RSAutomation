package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:/Users/User/git/git/RSAutomation/RSAutomationBDDFramework/src/main/java/Features/LoginAndVerify.feature",
				glue = {"stepDefinitions"},
				plugin = {"pretty","html:test-output","json:json_output/cucumber.json","junit:xml_output/cucumber.xml"},
				dryRun = false,
				monochrome = true,
				strict = true
				)
public class TestRunner {

}
