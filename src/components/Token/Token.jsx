import "./token.css"
import TokenRow from "./TokenRow"
function Token() {
    return <>
        <section className="token-div"id="tokenomics-section">
            <div className="container mx-auto">
                <div className="token-heading-div m-auto wow fadeInDown" data-wow-delay=".5s">
                    <h1 className=' token-heading text-white font-garmani lg:text-[62px] text-[38px] font-normal leading-[88px] w-[10px] sm:w-[100px] '><span className='heading-border'><hr /></span>Tokenomics</h1>
                    <h2 className="ml-10 primary-color  pb-2 lg:pb-0 font-semibold text-[30px] leading-[29px]">Buy & Sell Tax = 10%</h2>
                </div>
                <div className="sm:my-[75px] my-[20px] h-fit m-auto">
                    <TokenRow id='Marketing' className='wow fadeInLeft' data-wow-delay=".5s" heading="Marketing" persentage="5" subheading="Marketing" desc="5% of all trancsactions is used for Marketing expenses." />
                    <TokenRow id='Development' heading="Development" persentage="2" subheading="Development" desc="2% of all transactions is used for Development expenses." />

                    <TokenRow id='BuyBack' heading="Buy Back" persentage="1" subheading="BuyBack" desc="1% of all transactions is used for Buy Back    expenses." />

                    <TokenRow id='Liquidity' heading="Liquidity" persentage="1" subheading="Liquidity" desc="1% of all transactions is used for  Liquidity expenses." />

                    <TokenRow id='Team' heading="Team" persentage="1" />
                </div>
            </div>
        </section>
    </>;
}




export default Token