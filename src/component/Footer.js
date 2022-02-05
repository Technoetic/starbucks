import reward from '../resource/img/rewards-logo.png'

export default function Footer(){



    return (
        <div style={{width : '100%', height : 200, backgroundColor: '#0B5345'}}>
            <div style={{width : 900,  height :'100%', margin : '0px auto', backgroundColor: '#0B5345'}}>
                <div style={{marginTop: 20,backgroundSize: 'cover',  width : 100, height : 100, float : 'left', backgroundImage: `url(${reward})`}}></div>

                <div style={{float : 'right'}}>


                    <div style={{width : 650, height: 45, fontSize: 10, paddingTop: 12}}>


                        <div style={{float: 'left', width : 480, textAlign: 'left'}}>
                            회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
                            카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                        </div>
                        <div style={{float: 'right'}}>
                            <button style={{backgroundColor: '#0b5345', border : '1px solid white', height : 30, width: 150, borderRadius: 8}}>e-Gift Card 선물하기</button>
                        </div>
                    </div>



                    <div style={{width : 650, height: 45, fontSize: 10, paddingTop: 12}}>


                        <div style={{float: 'left', width : 480, textAlign: 'left'}}>
                            회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
                            카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                        </div>
                        <div style={{float: 'right'}}>
                            <button style={{backgroundColor:'#0b5345', border : '1px solid white', height : 30, width: 150, borderRadius: 8 }}>e-Gift Card 선물하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}