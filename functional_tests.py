from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager

from selenium.webdriver.common.keys import Keys
import time
import unittest


class NewVisitorTest(unittest.TestCase):

    def setUp(self) -> None:
        print("Starting functional tests")
        self.browser = webdriver.Firefox(
            executable_path=GeckoDriverManager().install())

    def tearDown(self) -> None:
        self.browser.quit()

    # home page exists
    def test_home_page_exists(self):
        self.browser.get("http://localhost:8000/signals")
        self.assertIn("Home", self.browser.title)


if __name__ == "__main__":
    unittest.main(warnings="ignore")
