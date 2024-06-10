export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('debts').del()

  // Inserts seed entries
  await knex('debts').insert([
    {
      id: 1,
      name: 'Credit Card A',
      debt_owing: 2500,
      minimum_payment: 500,
      interest_rate: 18,
      total_debt: 3000,
    },

    {
      id: 5,
      name: 'Personal Loan',
      debt_owing: 5000,
      minimum_payment: 500,
      interest_rate: 10,
      total_debt: 6000,
    },
    {
      id: 6,
      name: 'Credit Card B',
      debt_owing: 3500,
      minimum_payment: 750,
      interest_rate: 20,
      total_debt: 4000,
    },
    {
      id: 7,
      name: 'Medical Bill',
      debt_owing: 1000,
      minimum_payment: 50,
      interest_rate: 0,
      total_debt: 1000,
    },
    {
      id: 9,
      name: 'Store Credit',
      debt_owing: 2000,
      minimum_payment: 600,
      interest_rate: 15,
      total_debt: 2500,
    },
    {
      id: 13,
      name: 'Payday Loan',
      debt_owing: 1500,
      minimum_payment: 550,
      interest_rate: 30,
      total_debt: 2000,
    },

    {
      id: 15,
      name: 'Utility Bill Arrears',
      debt_owing: 600,
      minimum_payment: 50,
      interest_rate: 0,
      total_debt: 600,
    },
    {
      id: 16,
      name: 'Peer-to-Peer Loan',
      debt_owing: 4000,
      minimum_payment: 700,
      interest_rate: 14,
      total_debt: 5000,
    },
    {
      id: 17,
      name: 'Family Loan',
      debt_owing: 2000,
      minimum_payment: 100,
      interest_rate: 0,
      total_debt: 2000,
    },
    {
      id: 18,
      name: 'Business Credit Card',
      debt_owing: 6000,
      minimum_payment: 1500,
      interest_rate: 18,
      total_debt: 7000,
    },
    {
      id: 19,
      name: 'Rent Arrears',
      debt_owing: 1200,
      minimum_payment: 150,
      interest_rate: 0,
      total_debt: 1200,
    },
    {
      id: 20,
      name: 'Gym Membership Fee',
      debt_owing: 150,
      minimum_payment: 20,
      interest_rate: 0,
      total_debt: 150,
    },
  ])
}
