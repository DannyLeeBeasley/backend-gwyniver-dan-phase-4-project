class User < ApplicationRecord
    has_many :pedals 
    has_many :pedal_boards, through: :pedals
end
