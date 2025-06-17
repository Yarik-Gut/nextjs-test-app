import React from 'react';

export const dynamic = 'force-dynamic'; // Це для того, щоб сторінка рендерилася на сервері кожен раз

export default function SsrPage() {
    return (
        <div>
            <h1>Це сторінка з SSR!</h1>
        </div>
    );
}
