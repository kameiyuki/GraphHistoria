import React from 'react';
import classNames from 'classnames'


const Introduction = (props) => {
    const card=classNames("col-6","IntoroductionPerson")
    const row=classNames("row","PersonCard")

    return (
        <div className={row}>
            <h3>織田信長</h3>
            <div className='col-6'>
                <img src={props.ImgPath} alt="logo"/>
            </div>
            <div className={card}>
                <p>
                    織田信長は1534年、現在の愛知県に生まれる。<br/>1560年
                    隣国の今川義元が攻めてくるが、織田信長は10分の1の兵力でこれを撃破。
                    その後、領土を拡大し近畿地方一帯を収める大大名になる。その過程で、延暦寺の焼き討ちや
                    長篠の戦いで大量の鉄砲を用いて撃破するなど、前例のないことをどんどん実施した。
                    しかし、天下統一の目前で、1582年、本能寺の変で明智光秀に倒される。享年49歳。<br/><br/>

                    織田信長は今までの常識を打ち破ることを数多く行ってきたが、どういう想いでやってきたのだろう。
                    織田信長の想いをあなたなりに考えてみよう。
                </p>
            </div>
        </div>
    )
}
export default Introduction;
