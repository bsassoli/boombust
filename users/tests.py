from django.test import TestCase
from django.contrib.auth import get_user_model

# Create your tests here.
class ModelTests(TestCase):
    def test_create_user_with_email_successful(self):
        """test_create_user_with_email_successful."""
        email = "sassoli@gmail.com"
        password = "test_password"
        username = "test_user"
        user = get_user_model().objects.create_user(
            username=username,
            email=email,
            password=password,
        )
        self.assertEqual(user.email, email)
        self.assertEqual(user.username, username)
        self.assertTrue(user.check_password(password))


class ViewsTests(TestCase):
    def test_signup_page_exists(self):
        """test_signup_page_exists Checks that a sign up page exists"""
        response = self.client.get("/users/signup/")
        self.assertEqual(response.status_code, 200)
