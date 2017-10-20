import { HighchartsConsumerPage } from './app.po';

describe('highcharts-consumer App', () => {
  let page: HighchartsConsumerPage;

  beforeEach(() => {
    page = new HighchartsConsumerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
