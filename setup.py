from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in click_front/__init__.py
from click_front import __version__ as version

setup(
	name="click_front",
	version=version,
	description="click front",
	author="edom",
	author_email="abolupna1@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
