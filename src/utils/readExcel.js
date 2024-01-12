import readXlsxFile from 'read-excel-file';

export const readExcel = async (localName) => {
    try {
        const address = localName.split(' ');
        const a1 = address[0];
        const a2 = address[1] ?? null;

        const response = await fetch('./data/local_name.xlsx');
        const arrayBuffer = await response.arrayBuffer();

        return new Promise((resolve, reject) => {
            readXlsxFile(arrayBuffer, {
                transformData(data) {
                    // 읍, 구 정보는 remove
                    const filteredData = data.filter(row => !row[4]);
                    return filteredData;
                }
            }).then((rows) => {
                for (let i = 0; i <= rows.length; i++) {
                    const area = rows[i];
                    if (area && area[2] === a1 && area[3] === a2) {
                        const result = { x: area[5], y: area[6], lon: area[8], lat: area[11] };
                        resolve(result);
                        return;
                    }
                }
                //need to resolve!!!!
                resolve({ x: null, y: null, lon: null, lat: null });
            }).catch(reject);
        });
    } catch (error) {
        console.error("Error loading the file:", error);
        return { x: null, y: null, lon: null, lat: null };
    }
};
