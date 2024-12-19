import { Builder, Browser, By, Key, until } from 'selenium-webdriver'
import {Options} from "selenium-webdriver/chrome"
import { isFunctionDeclaration } from 'typescript';

async function openMeet() {
  
  try {
    await driver.get('https://meet.google.com/zzq-gvhe-kow')
    ​​const popupButton = await driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "Got it")]')), 10000);
    await popupButton.click()
    ​​const nameInput = await driver.wait(until.elementLocated(By.xpath('//input[@placeholder="Your name"]')), 10000);
    driver.sleep(100000);
    await nameInput.clear();
    await nameInput.click();
    await nameInput.sendKeys('value', "Meeting bot");
    await driver.sleep(1000)
    ​​const buttonInput = await driver.wait(until.elementLocated(By.xpath('//span[contains(text(), "Ask to join")]')), 10000);
    buttonInput.click();  
  } catch(error) {
    console.log(error);
  }
  finally {
    await driver.quit()
  }
}

async function getDriver() {

}

async function main() {
    const driver = await getDriver();
}