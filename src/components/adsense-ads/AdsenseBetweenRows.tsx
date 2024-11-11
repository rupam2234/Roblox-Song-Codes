const AdsenseMobileAdForTable = () => {
  const adsenseCode = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- RobloxSongCodes Table Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="3129821755"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

  return (
    <div className="my-6 h-64 w-auto mx-[15px] mobile-ad-content">
      <div dangerouslySetInnerHTML={{ __html: adsenseCode }}></div>
    </div>
  );
};

export default AdsenseMobileAdForTable;
