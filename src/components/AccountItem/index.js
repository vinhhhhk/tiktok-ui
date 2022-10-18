import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx=classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6ae3d8b11924b5184e21f336e779a78d~c5_100x100.jpeg?x-expires=1665889200&x-signature=%2FuUlJvfUtwZTWeUL%2F5djZtnplQc%3D" alt="Hoaa "/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van a</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck}/>
                </h4>
                <span className={cx('userName')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;