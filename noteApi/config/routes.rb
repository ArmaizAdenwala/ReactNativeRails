Rails.application.routes.draw do
  resources :notes, only: [:index, :create]
end
