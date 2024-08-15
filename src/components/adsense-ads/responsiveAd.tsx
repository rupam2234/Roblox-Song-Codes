const ResponsiveAd = () => {
  const adsenseCode = `
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- Roblox Tax Calculator In Content -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="5350223231"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        `;
  return (
    <div className="mt-10 mx-[15px]">
      <div dangerouslySetInnerHTML={{ __html: adsenseCode }} />
    </div>
  );
};

export default ResponsiveAd;
