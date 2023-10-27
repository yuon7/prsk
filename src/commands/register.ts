export function parseRegisterCommand(command: string): { formationNumber: number, leadingSkill: number, internalValue: number, overallPower: number } | null {
    if (!command.startsWith('/register ')) {
      return null;
    }
    const dataPart = command.substring(10);
    const [formationNumberStr, leadingSkillStr, internalValueStr, overallPowerStr] = dataPart.split('/');
    
    if (!formationNumberStr || !leadingSkillStr || !internalValueStr || !overallPowerStr) {
      return null;
    }
  
    // 整理
    const formationNumber = parseInt(formationNumberStr, 10);
    const leadingSkill = parseInt(leadingSkillStr, 10);
    const internalValue = parseInt(internalValueStr, 10);
    const overallPower = parseFloat(overallPowerStr);
  
    // 数値変換が成功したか確認
    if (isNaN(formationNumber) || isNaN(leadingSkill) || isNaN(internalValue) || isNaN(overallPower)) {
      return null;
    }
    
    return { formationNumber, leadingSkill, internalValue, overallPower };
  }
  