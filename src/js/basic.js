export default function getAttack(obj) {
  const result = [];
  const { special } = obj;
  for (const prop in special) {
    if (prop) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = special[prop];
      result.push({
        id,
        name,
        icon,
        description,
      });
    }
  }
  return result;
}
