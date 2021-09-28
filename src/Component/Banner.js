import React, { useEffect } from 'react';


const Banner = ({ ins, id, src, classname, style, data_cfasync }) => {
  // useEffect(() => {
  //   if (src === '/ads_vecer_mk.js' || src === undefined || data_cfasync) {
  //     return;
  //   } else {
  //     loadjs(src, () => {});
  //     // document.body.appendChild(script);

  //     // return () => {
  //     //   document.body.removeChild(script);
  //     // };
  //   }
  // }, []);

  return (
    <div id={ins && ins.data_revive_zoneid} className={classname} style={style}>
      {ins && (
        <ins
          data-revive-zoneid={ins.data_revive_zoneid}
          data-revive-id={ins.data_revive_id}
        ></ins>
      )}
      {id && <div id={id}></div>}

      {/* {data_cfasync && (
        <Script id={`id="show_banner_${id}`} src={src} strategy="lazyOnload" />
      )} */}
    </div>
  );
};

export default Banner;
