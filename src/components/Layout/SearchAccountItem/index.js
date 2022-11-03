import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.moduile.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ae2b0d5129c22fc8d7799d6951bbf29~c5_100x100.jpeg?x-expires=1667635200&x-signature=OwPqXb%2B3iB0BfkybhSPKS4Ec5zA%3D" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )

}

export default AccountItem;