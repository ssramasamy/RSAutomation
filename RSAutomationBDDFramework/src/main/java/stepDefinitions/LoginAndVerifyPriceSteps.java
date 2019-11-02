		package stepDefinitions;
		
		import java.util.Map;
		import java.util.concurrent.TimeUnit;
		
		import org.openqa.selenium.By;
		import org.openqa.selenium.Keys;
		import org.openqa.selenium.WebDriver;
		import org.openqa.selenium.chrome.ChromeDriver;
		import org.testng.Assert;
		import io.cucumber.datatable.DataTable;
		import io.cucumber.java.en.And;
		import io.cucumber.java.en.Given;
		import io.cucumber.java.en.Then;
		import io.cucumber.java.en.When;
		
		public class LoginAndVerifyPriceSteps {
		
			WebDriver driver;
		
			@Given("^user is already on home page$")
			public void user_is_already_on_home_page() {
		
				System.setProperty("webdriver.chrome.driver", "C:/Users/User/git/git/RSAutomation/RSAutomationBDDFramework/Drivers/chromedriver.exe");
				driver = new ChromeDriver();
				driver.get("https://uk.rs-online.com");
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
			}
		
			@When("^user is clicks on login button$")
			public void user_is_clicks_on_login_button() {
				driver.findElement(By.xpath("//a[@title='Log In']")).click();
		
			}
		
			@Then("^title of page is RS Components Electronic and Electrical Components$")
			public void title_of_page() {
				String pagetitle = driver.getTitle();
				Assert.assertEquals("RS Components | Electronic and Electrical Components", pagetitle);
			}
		
			@Then("^user enters username and password and click login$")
			public void user_enters_username_and_password(DataTable credentials) {
				for (Map<Object, Object> data : credentials.asMaps(String.class, String.class)) {
		
					driver.findElement(By.id("username")).sendKeys(data.get("username").toString());
					driver.findElement(By.id("password")).sendKeys(data.get("password").toString());
					driver.findElement(By.xpath("//button[@type = 'submit']")).sendKeys(Keys.ENTER);
					driver.findElement(By.xpath("//button[@type = 'submit']")).click();
		
				}
			}
		
			@Then("^user enters product in search box$")
		
			public void search() {
		
				driver.findElement(By.id("searchTerm")).sendKeys("P40P42D12P1-24");
				driver.findElement(By.id("btnSearch")).click();
		
			}
		
			@Then("^enter no.of products and verify productprice$")
		
			public void price(DataTable credentials) {
		
				for (Map<Object, Object> data : credentials.asMaps(String.class, String.class)) {
					driver.findElement(By.xpath("//div[@class='priceQuantity']//input[@class='form-control']")).clear();
					driver.findElement(By.xpath("//div[@class='priceQuantity']//input[@class='form-control']"))
							.sendKeys(data.get("no.of products").toString());
					String price = driver.findElement(By.xpath("//span[@class='price ']")).getText();
					String adata = data.get("productprice").toString();
					Assert.assertEquals(price, adata);
		
				}
		
			}
		
			@And("^user clicks logout button$")
			public void click_logout_button() {
				
				
				driver.findElement(By.xpath("//div[@class='priceQuantity']//input[@class='form-control']")).clear();
				driver.findElement(By.xpath("//a[@id='js-logInOut']")).click();
				driver.quit();
		
			}
		
		}
