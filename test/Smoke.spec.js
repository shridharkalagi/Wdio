import assert from 'assert';
import LandingPage from './pages/LandingPage';

suite('Validate the contact us page', () => {
  test('@local Smaple Test -', () => {
    const heading = new LandingPage().clickContactUs().getHeading();
    assert('Customer service - Contact us', heading, 'Test failed');
  });
});
