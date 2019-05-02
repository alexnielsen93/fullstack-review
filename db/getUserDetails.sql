select firstname, lastname, email, balance from users
join balances on users.user_id = balances.balance_id
where users.user_id = ${id}