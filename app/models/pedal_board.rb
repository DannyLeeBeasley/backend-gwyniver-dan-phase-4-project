class PedalBoard < ApplicationRecord
    has_many :pedals 
    has_many :users, through: :pedals
end
