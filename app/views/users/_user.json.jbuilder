json.extract! user, :id, :name, :age, :stack, :created_at, :updated_at
json.url user_url(user, format: :json)
