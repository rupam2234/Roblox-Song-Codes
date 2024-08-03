const Ads = () => {
  const adsenseCode = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
            crossorigin="anonymous"></script>
        <!-- Roblox Tool AD -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7255780745640035"
            data-ad-slot="9680232949"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    `;
  return (
    <div className="mt-10">
      <div dangerouslySetInnerHTML={{ __html: adsenseCode }} />
    </div>
  );
};

export default Ads;
