import React from "react";

export const cacheImages = (srcArray: string[], fnChangeState: React.Dispatch<React.SetStateAction<boolean>>) => {
    const promises = srcArray.map((src) => {
        return new Promise<void>(function (resolve, reject) {
            const img = new Image();

            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject();
            console.log('Passou pela promise');
        });
    });

    Promise.all(promises);
    fnChangeState(false);
}