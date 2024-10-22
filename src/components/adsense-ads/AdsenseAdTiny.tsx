const TinyAdsenseAds = () => {
  const theAd = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- Tiny Roblox Song Code Ad -->
<ins class="adsbygoogle"
     style="display:inline-block;width:250px;height:90px"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="3807479183"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

  return (
    <div className="my-2 md:hidden block mx-[15px]">
      <div dangerouslySetInnerHTML={{ __html: theAd }}></div>
    </div>
  );
};

export default TinyAdsenseAds;
