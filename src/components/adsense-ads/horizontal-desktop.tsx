const AdsDesktopIncontent = () => {
  const adsenseCode = `
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- Desktop Ad Incontent -->
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="9054618810"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> 
      `;
  return (
    <div className="hidden sm:block mt-10 mx-[15px]">
      <div dangerouslySetInnerHTML={{ __html: adsenseCode }} />
    </div>
  );
};

export default AdsDesktopIncontent;
