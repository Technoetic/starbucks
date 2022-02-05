import back from '../resource/img/back.png'

export default function Contents(){
    
    return (
        <>
            <div style={{width : '100%', height : 500, backgroundSize: 'cover', backgroundImage: `url(${back})`}}></div>


            <div style={{width : '50%', height : 60, backgroundColor: '#17202A', color : 'white', float : 'left', fontSize: 12}}>
                <div style={{paddingTop : 20}}> 공지사항 <span style={{fontSize : 5}}>  [채용] 2202년 상반기 부점장(W) 채용 안내</span></div>
            </div>


            <div style={{width : '50%', height : 60, backgroundColor: '#f6f5ef', float: 'left', fontSize: 12}}>
                <div style={{paddingTop : 20}}>스타벅스 프로모션</div>
            </div>
        </>
    )
}