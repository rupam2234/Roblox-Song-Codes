const FirstInContentAd = () => {
  const adsenseCode = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- RobloxSongCodes InContent 1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="3946882890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;
  return (
    <div className="my-4 mx-[15px] flex items-center justify-center">
      <div dangerouslySetInnerHTML={{ __html: adsenseCode }} />
    </div>
  );
};

export default FirstInContentAd;
