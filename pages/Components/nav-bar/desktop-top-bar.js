import Link from 'next/link';
import { processedInfo } from '/pages/core/info';
import { menu } from '/pages/core/info';

export default function desktopTopBar() {
    return (
        <>
            <div className="top-bar-wrapper">
                <div>
                </div>
                <div className="top-bar">
                    <Link legacyBehavior href={processedInfo.callBusiness}>
                        <div className="top-bar-item-left">
                            CALL NOW
                        </div>
                    </Link>
                    <div className="top-bar-item-spacer">
                    </div>
                    <Link legacyBehavior href={menu.linkToMainMenu3}>
                        <div className="top-bar-item-right">
                            BOOK NOW
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}