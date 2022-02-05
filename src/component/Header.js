import logo from '../resource/img/logo.png'

export default function Header(){
    
    return (
        <>
            <div style={{width : '100%',height : 80, backgroundColor: '#f6f5ef'}}>
                <div style={{width : 900, height: '100%', margin : '0px auto'}}>
                    <div style={{width : 70, height : 70, float : 'left', backgroundSize: 'cover', backgroundImage: `url(${logo})`}}></div>
                    <div style={{float : 'right'}}>
                        <div style={{width : 650, height: 35, fontSize: 10, paddingTop: 12}}>
                            <span style={{paddingRight: 10}}>Sign In</span>
                            <span style={{paddingRight: 10}}>My Starbucks</span>
                            <span style={{paddingRight: 10}}>Customer Service & ideas</span>
                            <span>Find a Store</span>

                        </div>
                        <div style={{width : 650, height: 45, fontSize : 10}}>
                            <span style={{paddingRight: 10}}>COFFEE</span>
                            <span style={{paddingRight: 10}}>MENU</span>
                            <span style={{paddingRight: 10}}>STORE</span>
                            <span style={{paddingRight: 10}}>RESPONSIBILLY</span>
                            <span style={{paddingRight: 10}}>STARBUCKS REWARDS</span>
                            <span>WHAT'S NEW</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}