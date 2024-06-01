// <!-- Calendly inline widget begin -->
// <div class="calendly-inline-widget" data-url="https://calendly.com/codershivansh/30min" style="min-width:320px;height:700px;"></div>
// <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
// <!-- Calendly inline widget end -->

import Head from 'next/head';

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/codershivansh/30min',
      parentElement: document.getElementById('calendly-inline-widget')
    });
  }, [])
  return (
    <>
      <Head>
        <script src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
      <>
          <div
            id="calendly-inline-widget"
            style={{minWidth: 320, height: 580}}
            data-auto-load="false"
          >
          </div>
      </>
    </>

export default CalendlyEmbed;
