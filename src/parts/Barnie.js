function Barnie() {
    return <>
        <h2>DVD of making full sized Traditional Scarecrow</h2>
        <div className="youtube-video-container">
            <iframe width="560" height="315"
                src="http://www.youtube.com/embed/BoP5rp-EFXc" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
            </iframe>
        </div>
        <p>
            "Making Barnie" by Joyce Warren.

            &pound;8.99 including Delivery in the UK.  If you want the dvd delivered else where but the UK please email scarecrowland@yahoo.com for details
        </p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="F9QVAG5M5TA6Y" />
            <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal – The safer, easier way to pay online." />
            <img alt="buy now" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
        </form>

    </>
}

export default Barnie