Rails.application.routes.draw do
  root 'root#index'
  # root "greetings#index"
  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # get '/', to: 'api#v1#greetings'
  # Defines the root path route ("/")
end
