const Ads = () => {
  const adsenseCode = `
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7255780745640035"
     crossorigin="anonymous"></script>
<!-- Roblox Song Codes Top Sidebar -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:300px"
     data-ad-client="ca-pub-7255780745640035"
     data-ad-slot="5672722054"></ins>
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

export default Ads;
