function Barnie() {
    return <>
        <div className="d-lg-flex align-self-start">

            <div className="card shadow text-center  p-3 p-lg-4 pb-lg-3 pb-0 mt-2">
                <h5>Buy A FlowerPot Scarecrow</h5>
                <a href="Pictures/sale3.jpg" className="mx-auto">
                    <img src="http://www.scarecrowland.co.uk/Pictures/saleSmall3.jpg" style={{ height: "16rem" }} className="rounded  mx-auto" alt="Scarecrow for sale" />
                </a>

                The Scarecrow is 41cm by 36cm.
                costs &pound;9.99  inc pp

                <div className="text-center">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="HSFK5HCKLUSP8" />
                        <input type="image" src="https://www.paypal.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online." />
                        <img alt="pay pal" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </div>

            <div className="card shadow text-center p-3 p-lg-4 pb-lg-0 mt-2 ms-lg-2 me-lg-2 flex-fill">

                <h5>Buy DVD of making full sized Traditional Scarecrow</h5>

                <iframe src="http://www.youtube.com/embed/BoP5rp-EFXc" title="scarecrow" className="mx-auto"></iframe>


                "Making Barnie" by Joyce Warren .

                <h5>&pound;8.99 including Delivery in the UK.</h5>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="F9QVAG5M5TA6Y" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal – The safer, easier way to pay online." />
                    <img alt="buy now" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                </form>
                If you want the dvd delivered else where but the UK
                <br />please email scarecrowland@yahoo.com for details
            </div>

            <div className="text-center mt-2 ">
                <img src="http://www.scarecrowland.co.uk/Pictures/gal36/Boris%20Johnson%204(Small).jpg" className="rounded img-fluid" alt="..." />
            </div>

        </div>

    </>
}

export default Barnie