import Link from 'next/link';
import { thongTinTiem1 } from '/pages/core/info';
import { thongTinTiem2 } from '/pages/core/info';

export default function MobileTopBar(){

    return(
        <>
            <div className="top-bar">
                <Link href={thongTinTiem2.callTiem} legacyBehavior>
                    <div className="top-bar-item-left">
                        CALL NOW
                    </div>
                </Link>
                <div className="top-bar-item-spacer">
                </div>
                <Link href={thongTinTiem2.linkBookingTiem} legacyBehavior>
                    <div className="top-bar-item-right">
                        BOOK NOW
                    </div>
                </Link>
            </div>
        </>
    )
}