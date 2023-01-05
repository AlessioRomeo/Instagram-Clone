import React from 'react';
import Stories from "./Stories";

function Feed(props) {
    return (
        <>
            <section>
                {/*     Stories     */}
                <Stories/>
                {/*     Posts     */}
            </section>

            <section>
                {/*     Mini Profile     */}
                {/*     Suggestions     */}
            </section>
        </>
    );
}

export default Feed;