class AddCategoryToPedals < ActiveRecord::Migration[6.1]
  def change
    add_column :pedals, :category, :string
  end
end
