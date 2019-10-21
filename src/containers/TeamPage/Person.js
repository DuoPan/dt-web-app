import React, {useState} from 'react';
import TweenOne from 'rc-tween-one';
import Texty from 'rc-texty';
import Typography from 'antd/lib/typography/Typography';

function Person({
  path,
  name,
  fp,
}) {
  const [showImage, setShowImage] = useState(true);

  return (
    <div
      style={{
        width: (window.innerWidth-160)/5,
        height: 400,
        // backgroundColor: '#55A34E',
      }}
      onMouseLeave={()=>setShowImage(true)}
      onMouseOver={()=>setShowImage(false)}
    >
      {showImage && (
        <TweenOne
          animation={{
            opacity: 1,
            duration: 1500
          }}
          style={{opacity: 0}}
        >
          <img src={path} alt={name} width={'100%'} height={'100%'}/>
        </TweenOne>
      )}
      {!showImage && (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 16, marginRight: 16, marginTop: 30}}>
          <Texty style={{fontSize: 30}}>{name}</Texty>
          <Texty style={{fontSize: 24, marginTop: 20}}>{fp}</Texty>
        </div>
      )}
    </div>
  );
}

export default Person;
