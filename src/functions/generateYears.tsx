export const generateYearsArray = (): { value: string, label: string }[] => {
    const years = [{ value: 'Freshers', label: 'Freshers (Less than 1 year)' }];
    for (let i = 1; i <= 30; i++) {
      years.push({ value: `${i}`, label: `${i} year${i === 1 ? '' : 's'}` });
    }
    return years;
  };