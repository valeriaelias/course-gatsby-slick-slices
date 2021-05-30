import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer name
  name: 'topping',
  // Visible name
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping'
    },
    {
      name: 'vegetarian',
      title: 'Vegeterian',
      type: 'boolean',
      description: 'Is it a vegetarian topping?',
      options: {
        layout: 'checkbox',
      }
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: fields => ({
      title: `${fields.name} ${fields.vegetarian ? '[veggie]' : ''}`,
    }),
  }
}