const { Builder, Capabilities, By } =require ("selenium-webdriver")
const { isStringTextContainingNode } = require("typescript")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})



test('I can Add cross off and delete a movie', async () => {

    // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
    let addMovie = await driver.findElement(By.xpath("//input[@placeholder='Add Movie']"))
    // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
    await addMovie.sendKeys('Fight Club\n')
    await addMovie.sendKeys('The Lion King\n')
    await addMovie.sendKeys('The Big Lebowski\n')
    await driver.sleep(1500)
    await driver.findElement(By.xpath("//span[text()='The Big Lebowski']")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//span[text()='Fight Club']")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//span[text()='The Lion King']")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//span[text()='The Big Lebowski']")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//span[text()='Fight Club']")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//span[text()='The Lion King']")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//button[text()='x'][1]")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//button[text()='x'][1]")).click()
    await driver.sleep(200)
    await driver.findElement(By.xpath("//button[text()='x'][1]")).click()
})

test("should be deleted", async ()=>{
    const deletedMessage = await driver.findElement(By.css('#message')).getText()
    console.log(deletedMessage)
    expect(deletedMessage).toContain("deleted")
    })
   

    

