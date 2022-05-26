from django.test import TestCase
from .models import Asset, Signal

# Create your tests here.


class ModelTests(TestCase):
    def test_asset_model_str_returns_asset_name(self):
        """Creates an asset instance and verifies it returns the correct __str__ representation."""
        name = "Mock Asset"
        ticker = "MOCK"
        asset = Asset.objects.create(
            name=name,
            ticker=ticker,
        )

        self.assertEqual(asset.name, name)
