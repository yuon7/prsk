import fs from 'fs';
import path from 'path';

const jsonFilePath = path.resolve(__dirname, '../../data/data.json');

function readJsonFile(): Record<string, any> {
  try {
    const rawData = fs.readFileSync(jsonFilePath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading the JSON file:', error);
    return {}; // エラーが発生した場合は空のオブジェクトを返す
  }
}


export function updateJsonFile(userId: string, formationId: string, data: { formationNumber: number, leadingSkill: number, internalValue: number, overallPower: number }) {
  const currentData = readJsonFile();
  
  if (!currentData[userId]) {
    currentData[userId] = {};
  }

  currentData[userId][formationId] = {
    formationNumber: data.formationNumber,
    leadingSkill: data.leadingSkill,
    internalValue: data.internalValue,
    overallPower: data.overallPower
  };

  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(currentData, null, 2));
  } catch (error) {
    console.error('Error writing to the JSON file:', error);
  }
}

  

const initialData = readJsonFile();
console.log("Initial data:", initialData);  // 空のオブジェクトまたは既存のデータが出力されるはず

// 新しいデータを追加または更新
updateJsonFile("user1", "formation1", { formationNumber: 1, leadingSkill: 150, internalValue: 730, overallPower: 32.9 });

// 更新後のデータを読み込んで出力
const updatedData = readJsonFile();
console.log("Updated data:", updatedData);  // 更新後のデータが出力されるはず