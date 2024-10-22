const Ads = () => {
  const adsenseCode = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- Roblox Song Codes Top Sidebar -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="5672722054"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    `;
  return (
    <div className="mx-[15px] w-auto h-[300px] text-center">
      <div dangerouslySetInnerHTML={{ __html: adsenseCode }} />
    </div>
  );
};

export default Ads;
