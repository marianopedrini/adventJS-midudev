function createXmasTree(height) {
  if (height < 1 || height > 100) return false;

  let tree = '';
  let treeBase = '';
  let branch = 1;
  let width = height * 2;

  for (let i = 1; i <= height; i++) {
    let treeRow = '';
    let countSpace = width / 2 - i;
    let spaces = '_'.repeat(countSpace);
    treeRow = `${spaces}${'*'.repeat(branch)}${spaces}`;
    branch = branch + 2;
    tree += `${treeRow}\n`;
  }
  for (let i = 0; i < 2; i++) {
    treeBase = '';
    let space = '_'.repeat(width / 2 - 1);
    let trunk = '#';
    treeBase += `${space}${trunk}${space}`;
    tree += `${treeBase}\n`;
  }

  return tree.trim();
}

console.log(createXmasTree(18));
